export default function Loading() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-10">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" />
      <h1 className="text-white text-2xl ml-4">Please wait...</h1>
    </div>

  )
}