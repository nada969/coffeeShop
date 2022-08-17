export interface menuData {
    title :string,
    url ?:string,
    icon ?: string,
    childMenu ?: menuData[],
    class ?: string
}
