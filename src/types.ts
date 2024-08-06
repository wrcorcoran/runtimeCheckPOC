/*
* the following are from set-common/src/api/artist/
* intended to test basic functionality with common types
*/
export interface BaseResult {
  identifier: string;
  link: string;
  originalLink: string;
  score: number;
  relativeScore: number;
}

export type ResultSourceType = "serp" | "linkinbio" | "website" | "datastore";

export interface ResultSource extends BaseResult {
  source: ResultSourceType;
}

export interface CompiledResult extends BaseResult {
  note?: string;
  displayName: string;
  shown: boolean;
  selected: boolean;
  confirmed: boolean;
  sources: ResultSource[];
}

export interface SocialRequest {
  id: string;
}

/*
* other types GPT and I generated for 
* testing
*/
export interface FooString {
    bar: string;
}

export interface FooNumber {
    bar: number;
}

export interface FooBoolean {
    bar: boolean;
}

export interface FooComplex {
    bar1: FooString[];
    bar2: FooNumber[];
    bar3: FooBoolean[];
}

export interface FooComplex2 extends FooComplex {
    bar4: (FooString | FooNumber | FooBoolean)[];
}

export interface FooCombination {
    bar1: string;
    bar2: number;
    bar3: boolean;
}

export type JSONValue = string | number | boolean | null | JSONArray | JSONObject;

export interface JSONArray extends Array<JSONValue> {}

export interface JSONObject {
    [key: string]: JSONValue;
}

type Status = "success" | "error";

export interface ApiResponse<T = any> {
    status: Status;
    data?: T;
    error?: string;
}

export interface PackOfDinosaurs {
    dinos: Dinosaur[]
    leader: string;
    members: number; 
}

type DinosaurKind = "t-rex" | "raptor" | "pterodactyl"

export interface Dinosaur {
    age: number;
    name: string;
    kind: DinosaurKind;
}
