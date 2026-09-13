import type { RouterConfig } from 'nuxt/schema'
import { START_LOCATION } from 'vue-router'

// Same as Nuxt's built-in default (hash links get scroll-margin-aware
// smooth scrolling, in-app route changes reset to top), except for the
// very first navigation after a fresh load/reload.
//
// Configuring scrollBehavior at all makes Vue Router disable the browser's
// native history.scrollRestoration (it wants to own scroll restoration
// itself). Nuxt's default scrollBehavior then has no savedPosition to work
// with on that first navigation — it never tracked one, since this is the
// first navigation this app instance has seen — so it falls through to
// forcing scroll to (0, 0). That's what was overriding the browser's own,
// already-correct, natively-restored scroll position on reload. Returning
// false here instead leaves the browser's restoration in place.
export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        if (from === START_LOCATION) return false

        if (to.path.replace(/\/$/, '') === from.path.replace(/\/$/, '')) {
            if (from.hash && !to.hash) return savedPosition ?? { left: 0, top: 0 }
            if (to.hash) return { el: to.hash, top: 0, behavior: 'smooth' }
            return false
        }

        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, top: 0, behavior: 'smooth' }
        return { left: 0, top: 0 }
    }
}
