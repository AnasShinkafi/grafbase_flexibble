import { ProjectInterface } from '@/common.types'
import Categories from '@/components/Categories';
import LoadMore from '@/components/LoadMore';
import ProjectCard from '@/components/ProjectCard';
import { type } from 'os';

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface}[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    }
  }
}

type SearchParams = {
  category?: string;
  endcursor?: string;
}
type Props = {
  searchParams: SearchParams
}

// solve the problem of reload content
export const dynamic ='force-dynamic';
export const dynamicParams = true;
export const revalidate = 0; 

const Home = async ({ searchParams: { category, endcursor}}: Props) => {
  return(
    <section className='flex-start flex-col paddings mb-16'>
      <h1>Categories</h1>
      <h1>Posts</h1>
      <h1>LoadMore</h1>
    </section>
  )
}
export default Home