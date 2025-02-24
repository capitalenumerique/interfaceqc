// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FaqDocumentDataSlicesSlice = PageIntroHeaderSlice;

/**
 * Content for FAQ documents
 */
interface FaqDocumentData {
    /**
     * Slice Zone field in *FAQ*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<FaqDocumentDataSlicesSlice> /**
     * Meta Title field in *FAQ*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: faq.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *FAQ*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: faq.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *FAQ*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * FAQ document from Prismic
 *
 * - **API ID**: `faq`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<FaqDocumentData>,
    'faq',
    Lang
>;

type HomeDocumentDataSlicesSlice = PartnersGridSlice | HomeProgrammingSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
     * Meta Title field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: home.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: home.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<HomeDocumentData>,
    'home',
    Lang
>;

type ProgramDocumentDataSlicesSlice = PageIntroHeaderSlice;

/**
 * Content for Program documents
 */
interface ProgramDocumentData {
    /**
     * Slice Zone field in *Program*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: program.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<ProgramDocumentDataSlicesSlice> /**
     * Meta Title field in *Program*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: program.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Program*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: program.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *Program*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: program.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * Program document from Prismic
 *
 * - **API ID**: `program`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProgramDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<ProgramDocumentData>,
    'program',
    Lang
>;

type TicketsDocumentDataSlicesSlice = PageIntroHeaderSlice;

/**
 * Content for Tickets documents
 */
interface TicketsDocumentData {
    /**
     * Slice Zone field in *Tickets*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: tickets.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<TicketsDocumentDataSlicesSlice> /**
     * Meta Title field in *Tickets*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: tickets.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Tickets*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: tickets.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *Tickets*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tickets.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * Tickets document from Prismic
 *
 * - **API ID**: `tickets`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TicketsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<TicketsDocumentData>,
    'tickets',
    Lang
>;

export type AllDocumentTypes = FaqDocument | HomeDocument | ProgramDocument | TicketsDocument;

/**
 * Item in *AlternateGrid → Default → Primary → items*
 */
export interface AlternateGridSliceDefaultPrimaryItemsItem {
    /**
     * title field in *AlternateGrid → Default → Primary → items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.items[].title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *AlternateGrid → Default → Primary → items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.items[].description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;
}

/**
 * Item in *AlternateGrid → Image Right → Primary → items*
 */
export interface AlternateGridSliceImageRightPrimaryItemsItem {
    /**
     * title field in *AlternateGrid → Image Right → Primary → items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.items[].title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *AlternateGrid → Image Right → Primary → items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.items[].description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;
}

/**
 * Primary content in *AlternateGrid → Default → Primary*
 */
export interface AlternateGridSliceDefaultPrimary {
    /**
     * eyebrowHeadline field in *AlternateGrid → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Eyebrow
     * - **API ID Path**: alternate_grid.default.primary.eyebrowHeadline
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    eyebrowHeadline: prismic.KeyTextField;

    /**
     * title field in *AlternateGrid → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *AlternateGrid → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;

    /**
     * image field in *AlternateGrid → Default → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;

    /**
     * items field in *AlternateGrid → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.default.primary.items[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    items: prismic.GroupField<Simplify<AlternateGridSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for AlternateGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<AlternateGridSliceDefaultPrimary>,
    never
>;

/**
 * Primary content in *AlternateGrid → Image Right → Primary*
 */
export interface AlternateGridSliceImageRightPrimary {
    /**
     * eyebrowHeadline field in *AlternateGrid → Image Right → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Eyebrow
     * - **API ID Path**: alternate_grid.imageRight.primary.eyebrowHeadline
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    eyebrowHeadline: prismic.KeyTextField;

    /**
     * title field in *AlternateGrid → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *AlternateGrid → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;

    /**
     * image field in *AlternateGrid → Image Right → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;

    /**
     * items field in *AlternateGrid → Image Right → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: alternate_grid.imageRight.primary.items[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    items: prismic.GroupField<Simplify<AlternateGridSliceImageRightPrimaryItemsItem>>;
}

/**
 * Image Right variation for AlternateGrid Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceImageRight = prismic.SharedSliceVariation<
    'imageRight',
    Simplify<AlternateGridSliceImageRightPrimary>,
    never
>;

/**
 * Slice variation for *AlternateGrid*
 */
type AlternateGridSliceVariation = AlternateGridSliceDefault | AlternateGridSliceImageRight;

/**
 * AlternateGrid Shared Slice
 *
 * - **API ID**: `alternate_grid`
 * - **Description**: AlternateGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSlice = prismic.SharedSlice<'alternate_grid', AlternateGridSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
    /**
     * eyebrowHeadline field in *Hero → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Eyebrow
     * - **API ID Path**: hero.default.primary.eyebrowHeadline
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    eyebrowHeadline: prismic.KeyTextField;

    /**
     * title field in *Hero → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *Hero → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;

    /**
     * image field in *Hero → Default → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;

    /**
     * callToActionLink field in *Hero → Default → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.callToActionLink
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    callToActionLink: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<'default', Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
    /**
     * eyebrowHeadline field in *Hero → Image Right → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Eyebrow
     * - **API ID Path**: hero.imageRight.primary.eyebrowHeadline
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    eyebrowHeadline: prismic.KeyTextField;

    /**
     * title field in *Hero → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.imageRight.primary.title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * description field in *Hero → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.imageRight.primary.description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;

    /**
     * image field in *Hero → Image Right → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.imageRight.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;

    /**
     * callToActionLink field in *Hero → Image Right → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.imageRight.primary.callToActionLink
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    callToActionLink: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
    'imageRight',
    Simplify<HeroSliceImageRightPrimary>,
    never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *HomeProgramming → Default → Primary → speakers*
 */
export interface HomeProgrammingSliceDefaultPrimarySpeakersItem {
    /**
     * speaker id field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].speaker_id
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    speaker_id: prismic.KeyTextField;

    /**
     * first name field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].first_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    first_name: prismic.KeyTextField;

    /**
     * last_name field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].last_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    last_name: prismic.KeyTextField;

    /**
     * job field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].job
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    job: prismic.KeyTextField;

    /**
     * img field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].img
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    img: prismic.ImageField<never>;

    /**
     * background color field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].background_color
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    background_color: prismic.ColorField;

    /**
     * text color field in *HomeProgramming → Default → Primary → speakers*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].text_color
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    text_color: prismic.ColorField;
}

/**
 * Primary content in *HomeProgramming → Default → Primary*
 */
export interface HomeProgrammingSliceDefaultPrimary {
    /**
     * description field in *HomeProgramming → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    description: prismic.KeyTextField;

    /**
     * speakers field in *HomeProgramming → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    speakers: prismic.GroupField<Simplify<HomeProgrammingSliceDefaultPrimarySpeakersItem>>;
}

/**
 * Default variation for HomeProgramming Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeProgrammingSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<HomeProgrammingSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *HomeProgramming*
 */
type HomeProgrammingSliceVariation = HomeProgrammingSliceDefault;

/**
 * HomeProgramming Shared Slice
 *
 * - **API ID**: `home_programming`
 * - **Description**: HomeProgramming
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeProgrammingSlice = prismic.SharedSlice<'home_programming', HomeProgrammingSliceVariation>;

/**
 * Primary content in *PageIntroHeader → Default → Primary*
 */
export interface PageIntroHeaderSliceDefaultPrimary {
    /**
     * Title field in *PageIntroHeader → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Titre de la page
     * - **API ID Path**: page_intro_header.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Introduction field in *PageIntroHeader → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Texte d'introduction de la page
     * - **API ID Path**: page_intro_header.default.primary.introduction
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    introduction: prismic.RichTextField;
}

/**
 * Default variation for PageIntroHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageIntroHeaderSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<PageIntroHeaderSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *PageIntroHeader*
 */
type PageIntroHeaderSliceVariation = PageIntroHeaderSliceDefault;

/**
 * PageIntroHeader Shared Slice
 *
 * - **API ID**: `page_intro_header`
 * - **Description**: PageIntroHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageIntroHeaderSlice = prismic.SharedSlice<'page_intro_header', PageIntroHeaderSliceVariation>;

/**
 * Item in *PartnersGrid → Default → Primary → Partner*
 */
export interface PartnersGridSliceDefaultPrimaryPartnerItem {
    /**
     * Logo field in *PartnersGrid → Default → Primary → Partner*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: partners_grid.default.primary.partner[].logo
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    logo: prismic.ImageField<never>;

    /**
     * Name field in *PartnersGrid → Default → Primary → Partner*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Nom du partenaire
     * - **API ID Path**: partners_grid.default.primary.partner[].name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    name: prismic.KeyTextField;

    /**
     * Website field in *PartnersGrid → Default → Primary → Partner*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Url du site Web du partenaire
     * - **API ID Path**: partners_grid.default.primary.partner[].website
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    website: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

    /**
     * Category field in *PartnersGrid → Default → Primary → Partner*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Catégorie du partenaire
     * - **Default Value**: Principaux
     * - **API ID Path**: partners_grid.default.primary.partner[].category
     * - **Documentation**: https://prismic.io/docs/field#select
     */
    category: prismic.SelectField<'Principaux' | 'Secondaires', 'filled'>;
}

/**
 * Primary content in *PartnersGrid → Default → Primary*
 */
export interface PartnersGridSliceDefaultPrimary {
    /**
     * Partner field in *PartnersGrid → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: partners_grid.default.primary.partner[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    partner: prismic.GroupField<Simplify<PartnersGridSliceDefaultPrimaryPartnerItem>>;
}

/**
 * Default variation for PartnersGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersGridSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<PartnersGridSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *PartnersGrid*
 */
type PartnersGridSliceVariation = PartnersGridSliceDefault;

/**
 * PartnersGrid Shared Slice
 *
 * - **API ID**: `partners_grid`
 * - **Description**: PartnersGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersGridSlice = prismic.SharedSlice<'partners_grid', PartnersGridSliceVariation>;

declare module '@prismicio/client' {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }

    interface CreateWriteClient {
        (repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
    }

    interface CreateMigration {
        (): prismic.Migration<AllDocumentTypes>;
    }

    namespace Content {
        export type {
            FaqDocument,
            FaqDocumentData,
            FaqDocumentDataSlicesSlice,
            HomeDocument,
            HomeDocumentData,
            HomeDocumentDataSlicesSlice,
            ProgramDocument,
            ProgramDocumentData,
            ProgramDocumentDataSlicesSlice,
            TicketsDocument,
            TicketsDocumentData,
            TicketsDocumentDataSlicesSlice,
            AllDocumentTypes,
            AlternateGridSlice,
            AlternateGridSliceDefaultPrimaryItemsItem,
            AlternateGridSliceDefaultPrimary,
            AlternateGridSliceImageRightPrimaryItemsItem,
            AlternateGridSliceImageRightPrimary,
            AlternateGridSliceVariation,
            AlternateGridSliceDefault,
            AlternateGridSliceImageRight,
            HeroSlice,
            HeroSliceDefaultPrimary,
            HeroSliceImageRightPrimary,
            HeroSliceVariation,
            HeroSliceDefault,
            HeroSliceImageRight,
            HomeProgrammingSlice,
            HomeProgrammingSliceDefaultPrimarySpeakersItem,
            HomeProgrammingSliceDefaultPrimary,
            HomeProgrammingSliceVariation,
            HomeProgrammingSliceDefault,
            PageIntroHeaderSlice,
            PageIntroHeaderSliceDefaultPrimary,
            PageIntroHeaderSliceVariation,
            PageIntroHeaderSliceDefault,
            PartnersGridSlice,
            PartnersGridSliceDefaultPrimaryPartnerItem,
            PartnersGridSliceDefaultPrimary,
            PartnersGridSliceVariation,
            PartnersGridSliceDefault,
        };
    }
}
