import PostCard from '@/components/postcard/PostCard'

export default function Home() {
  return (
    <main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  )
}
