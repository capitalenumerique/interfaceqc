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

type HomeDocumentDataSlicesSlice = HomeTicketsSlice | PartnersGridSlice | HomeProgrammingSlice;

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
 * Item in *Ticket types → inclusions*
 */
export interface TicketTypesDocumentDataInclusionsItem {
    /**
     * item field in *Ticket types → inclusions*
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
     * name field in *Ticket types*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    name: prismic.KeyTextField;

    /**
     * price field in *Ticket types*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#number
     */
    price: prismic.NumberField;

    /**
     * inclusions field in *Ticket types*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.inclusions[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    inclusions: prismic.GroupField<Simplify<TicketTypesDocumentDataInclusionsItem>>;

    /**
     * link field in *Ticket types*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: ticket_types.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
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

/**
 * Item in *Tickets → tickets*
 */
export interface TicketsDocumentDataTicketsItem {
    /**
     * ticket_type field in *Tickets → tickets*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: tickets.tickets[].ticket_type
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    ticket_type: prismic.ContentRelationshipField<'ticket_types'>;
}

type TicketsDocumentDataSlicesSlice = PageIntroHeaderSlice;

/**
 * Content for Tickets documents
 */
interface TicketsDocumentData {
    /**
     * tickets field in *Tickets*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: tickets.tickets[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    tickets: prismic.GroupField<Simplify<TicketsDocumentDataTicketsItem>>;

    /**
     * terms field in *Tickets*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tickets.terms
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    terms: prismic.RichTextField;

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
 * Item in *HomeSchedule → Default → Primary → speakers*
 */
export interface HomeProgrammingSliceDefaultPrimarySpeakersItem {
    /**
     * speaker id field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].speaker_id
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    speaker_id: prismic.KeyTextField;

    /**
     * first name field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].first_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    first_name: prismic.KeyTextField;

    /**
     * last_name field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].last_name
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    last_name: prismic.KeyTextField;

    /**
     * job field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].job
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    job: prismic.KeyTextField;

    /**
     * img field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].img
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    img: prismic.ImageField<never>;

    /**
     * background color field in *HomeSchedule → Default → Primary → speakers*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.speakers[].background_color
     * - **Documentation**: https://prismic.io/docs/field#color
     */
    background_color: prismic.ColorField;

    /**
     * text color field in *HomeSchedule → Default → Primary → speakers*
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
     * description field in *HomeSchedule → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_programming.default.primary.description
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    description: prismic.KeyTextField;

    /**
     * speakers field in *HomeSchedule → Default → Primary*
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
 * Item in *HomeTickets → Default → Primary → tickets*
 */
export interface HomeTicketsSliceDefaultPrimaryTicketsItem {
    /**
     * ticket_type field in *HomeTickets → Default → Primary → tickets*
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
     * title field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.title
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * tickets field in *HomeTickets → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_tickets.default.primary.tickets[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    tickets: prismic.GroupField<Simplify<HomeTicketsSliceDefaultPrimaryTicketsItem>>;
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
            TicketsDocumentDataTicketsItem,
            TicketsDocumentDataSlicesSlice,
            AllDocumentTypes,
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
        };
    }
}
