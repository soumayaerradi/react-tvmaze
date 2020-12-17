export interface Series {
    score: number;
    show:  Show;
}

export interface Show {
    id:           number;
    url:          string;
    name:         string;
    type:         Type;
    language:     Language;
    genres:       string[];
    status:       Status;
    runtime:      number | null;
    premiered:    Date | null;
    officialSite: null | string;
    schedule:     Schedule;
    rating:       Rating;
    weight:       number;
    network:      Network | null;
    webChannel:   Network | null;
    externals:    Externals;
    image:        Image | null;
    summary:      null | string;
    updated:      number;
    _links:       Links;
}

export interface Links {
    self:             Previousepisode;
    previousepisode?: Previousepisode;
}

export interface Previousepisode {
    href: string;
}

export interface Externals {
    tvrage:  number | null;
    thetvdb: number | null;
    imdb:    null | string;
}

export interface Image {
    medium:   string;
    original: string;
}

export enum Language {
    English = "English",
    Mongolian = "Mongolian",
}

export interface Network {
    id:      number;
    name:    string;
    country: Country | null;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number | null;
}

export interface Schedule {
    time: string;
    days: string[];
}

export enum Status {
    Ended = "Ended",
    InDevelopment = "In Development",
    Running = "Running",
}

export enum Type {
    Animation = "Animation",
    Scripted = "Scripted",
}