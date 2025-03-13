// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FaqDocumentDataSlicesSlice = TextImageSlice | TextSlice | AccordeonsSlice | PageIntroHeaderSlice;

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

type HomeDocumentDataSlicesSlice =
    | AccordeonsSlice
    | TextSlice
    | TextImageSlice
    | HomeTicketsSlice
    | PartnersGridSlice
    | HomeProgrammingSlice;

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

/**
 * Item in *Ticket types → Inclusions*
 */
export interface TicketTypesDocumentDataInclusionsItem {
    /**
     * Items field in *Ticket types → Inclusions*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.inclusions[].item
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    item: prismic.KeyTextField;
}

/**
 * Content for Ticket types documents
 */
interface TicketTypesDocumentData {
    /**
     * Name field in *Ticket types*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    name: prismic.KeyTextField;

    /**
     * Price field in *Ticket types*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#number
     */
    price: prismic.NumberField;

    /**
     * Inclusions field in *Ticket types*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.inclusions[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    inclusions: prismic.GroupField<Simplify<TicketTypesDocumentDataInclusionsItem>>;

    /**
     * Sharable field in *Ticket types*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: ticket_types.sharable
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#boolean
     */
    sharable: prismic.BooleanField;

    /**
     * Link field in *Ticket types*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

    /**
     * Background Color field in *Ticket types*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.background_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    background_color: prismic.ColorField;

    /**
     * Text Color field in *Ticket types*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.text_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    text_color: prismic.ColorField;
}

/**
 * Ticket types document from Prismic
 *
 * - **API ID**: `ticket_types`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TicketTypesDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
    Simplify<TicketTypesDocumentData>,
    'ticket_types',
    Lang
>;

type TicketsDocumentDataSlicesSlice =
    | AccordeonsSlice
    | TextImageSlice
    | TextSlice
    | HomeTicketsSlice
    | PageIntroHeaderSlice;

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

export type AllDocumentTypes = FaqDocument | HomeDocument | ProgramDocument | TicketTypesDocument | TicketsDocument;

/**
 * Item in *Accordeons → Default → Primary → Accordeons*
 */
export interface AccordeonsSliceDefaultPrimaryAccordeonsItem {
    /**
     * Title field in *Accordeons → Default → Primary → Accordeons*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordeons.default.primary.accordeons[].title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Content field in *Accordeons → Default → Primary → Accordeons*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: accordeons.default.primary.accordeons[].content
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    content: prismic.RichTextField;
}

/**
 * Primary content in *Accordeons → Default → Primary*
 */
export interface AccordeonsSliceDefaultPrimary {
    /**
     * Accordeons field in *Accordeons → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: accordeons.default.primary.accordeons[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    accordeons: prismic.GroupField<Simplify<AccordeonsSliceDefaultPrimaryAccordeonsItem>>;
}

/**
 * Default variation for Accordeons Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordeonsSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<AccordeonsSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *Accordeons*
 */
type AccordeonsSliceVariation = AccordeonsSliceDefault;

/**
 * Accordeons Shared Slice
 *
 * - **API ID**: `accordeons`
 * - **Description**: Accordeons
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordeonsSlice = prismic.SharedSlice<'accordeons', AccordeonsSliceVariation>;

/**
 * Item in *HomeSchedule → Default → Primary → Speakers*
 */
export interface HomeProgrammingSliceDefaultPrimarySpeakersItem {
    /**
     * Speaker ID field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].speaker_id
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    speaker_id: prismic.KeyTextField;

    /**
     * First Name field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].first_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    first_name: prismic.KeyTextField;

    /**
     * Last Name field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].last_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    last_name: prismic.KeyTextField;

    /**
     * Job field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].job
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    job: prismic.KeyTextField;

    /**
     * Img field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].img
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    img: prismic.ImageField<never>;

    /**
     * Background Color field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].background_color
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    background_color: prismic.ColorField;

    /**
     * Text Color field in *HomeSchedule → Default → Primary → Speakers*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].text_color
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    text_color: prismic.ColorField;
}

/**
 * Primary content in *HomeSchedule → Default → Primary*
 */
export interface HomeProgrammingSliceDefaultPrimary {
    /**
     * Description field in *HomeSchedule → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    description: prismic.KeyTextField;

    /**
     * Speakers field in *HomeSchedule → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    speakers: prismic.GroupField<Simplify<HomeProgrammingSliceDefaultPrimarySpeakersItem>>;
}

/**
 * Default variation for HomeSchedule Slice
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
 * Slice variation for *HomeSchedule*
 */
type HomeProgrammingSliceVariation = HomeProgrammingSliceDefault;

/**
 * HomeSchedule Shared Slice
 *
 * - **API ID**: `home_programming`
 * - **Description**: HomeProgramming
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeProgrammingSlice = prismic.SharedSlice<'home_programming', HomeProgrammingSliceVariation>;

/**
 * Item in *HomeTickets → Default → Primary → Tickets*
 */
export interface HomeTicketsSliceDefaultPrimaryTicketsItem {
    /**
     * Ticket Type field in *HomeTickets → Default → Primary → Tickets*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.tickets[].ticket_type
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    ticket_type: prismic.ContentRelationshipField<'ticket_types'>;
}

/**
 * Primary content in *HomeTickets → Default → Primary*
 */
export interface HomeTicketsSliceDefaultPrimary {
    /**
     * Section Title field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.section_title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    section_title: prismic.KeyTextField;

    /**
     * Title field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Tickets field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.tickets[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    tickets: prismic.GroupField<Simplify<HomeTicketsSliceDefaultPrimaryTicketsItem>>;

    /**
     * Terms field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.terms
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    terms: prismic.KeyTextField;
}

/**
 * Default variation for HomeTickets Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeTicketsSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<HomeTicketsSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *HomeTickets*
 */
type HomeTicketsSliceVariation = HomeTicketsSliceDefault;

/**
 * HomeTickets Shared Slice
 *
 * - **API ID**: `home_tickets`
 * - **Description**: HomeTickets
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeTicketsSlice = prismic.SharedSlice<'home_tickets', HomeTicketsSliceVariation>;

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
     * Description field in *PartnersGrid → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Description de la section
     * - **API ID Path**: partners_grid.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    description: prismic.KeyTextField;

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

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
    /**
     * Title field in *Text → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Content field in *Text → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text.default.primary.content
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    content: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<'default', Simplify<TextSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

/**
 * Primary content in *TextImage → Default → Primary*
 */
export interface TextImageSliceDefaultPrimary {
    /**
     * Title field in *TextImage → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * CTA field in *TextImage → Default → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image.default.primary.cta
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

    /**
     * Image 1 field in *TextImage → Default → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image.default.primary.image_1
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image_1: prismic.ImageField<never>;

    /**
     * Image 2 field in *TextImage → Default → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image.default.primary.image_2
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image_2: prismic.ImageField<never>;
}

/**
 * Default variation for TextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<TextImageSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *TextImage*
 */
type TextImageSliceVariation = TextImageSliceDefault;

/**
 * TextImage Shared Slice
 *
 * - **API ID**: `text_image`
 * - **Description**: TextImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSlice = prismic.SharedSlice<'text_image', TextImageSliceVariation>;

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
            TicketTypesDocument,
            TicketTypesDocumentData,
            TicketTypesDocumentDataInclusionsItem,
            TicketsDocument,
            TicketsDocumentData,
            TicketsDocumentDataSlicesSlice,
            AllDocumentTypes,
            AccordeonsSlice,
            AccordeonsSliceDefaultPrimaryAccordeonsItem,
            AccordeonsSliceDefaultPrimary,
            AccordeonsSliceVariation,
            AccordeonsSliceDefault,
            HomeProgrammingSlice,
            HomeProgrammingSliceDefaultPrimarySpeakersItem,
            HomeProgrammingSliceDefaultPrimary,
            HomeProgrammingSliceVariation,
            HomeProgrammingSliceDefault,
            HomeTicketsSlice,
            HomeTicketsSliceDefaultPrimaryTicketsItem,
            HomeTicketsSliceDefaultPrimary,
            HomeTicketsSliceVariation,
            HomeTicketsSliceDefault,
            PageIntroHeaderSlice,
            PageIntroHeaderSliceDefaultPrimary,
            PageIntroHeaderSliceVariation,
            PageIntroHeaderSliceDefault,
            PartnersGridSlice,
            PartnersGridSliceDefaultPrimaryPartnerItem,
            PartnersGridSliceDefaultPrimary,
            PartnersGridSliceVariation,
            PartnersGridSliceDefault,
            TextSlice,
            TextSliceDefaultPrimary,
            TextSliceVariation,
            TextSliceDefault,
            TextImageSlice,
            TextImageSliceDefaultPrimary,
            TextImageSliceVariation,
            TextImageSliceDefault,
        };
    }
}
