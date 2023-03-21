import type { TypeLanguage } from "@/utils/interface/language";

export interface IRepository {
    name: string,
    language: TypeLanguage,
    svn_url: string,
    clone_url: string,
    description: string,
    homepage: string,
    topics: string[]
}