
import TopicCard from "./topic-card"
import  useQuizStore  from "@/app/store/useQuizStore";

const hero = () => {
  const { quizData, loading, error } = useQuizStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <div className="bg-primary rounded-tr-[5vw] rounded-tl-[5vw] my-6 text-white p-4 items-center justify-center flex py-20">
            <h1 className="text-5xl font-bold">{quizData?.title}</h1>
        </div>

        <div className="flex justify-between">
            <TopicCard title={quizData?.topic} description={quizData?.topic} href="/molecular"/>
            <TopicCard title={"Natural Selection and Adaptation"} description={"Natural Selection and Adaptation"} href="/molecular"/>
            <TopicCard title={"Human Evolution and Phylogenetics"} description={"Human Evolution and Phylogenetics"} href="/molecular"/>
        </div>

    </div>
  )
}

export default hero