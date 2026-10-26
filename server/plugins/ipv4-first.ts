import dns from 'node:dns';

// Prismic's CDN intermittently resets IPv6 connections, making server-side fetches fail
export default defineNitroPlugin(() => {
    dns.setDefaultResultOrder('ipv4first');
});
