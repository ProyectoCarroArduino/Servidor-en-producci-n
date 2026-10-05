export interface GuideMenuNode {
  label: string
  icon?: string
  href?: string
  children?: GuideMenuNode[]
}

export function menuNodeContainsRoute(node: GuideMenuNode, path: string): boolean {
  return (
    node.href === path ||
    Boolean(node.children?.some((child) => menuNodeContainsRoute(child, path)))
  )
}
