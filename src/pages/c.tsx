import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Comp from '../components/ui/Header2'
import Comp2 from '../components/ui/Header'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Comp />
      <Comp2 />
    </main>
  )
}

export default IndexPage
