import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Create, Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Generated Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptus.io is an open-sourced AI prompting 
            tool for modern world to create, discover 
            and share creative prompts.
         </p>

         <Feed />
    </section>
  )
}

export default Home