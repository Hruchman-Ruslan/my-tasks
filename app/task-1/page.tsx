export default function TaskFirst() {
  return (
    <section className="flex flex-col items-center gap-8 py-10">
      <h1 className="text-2xl font-bold">Task - 1</h1>

      <ul className="flex flex-col gap-6">
        <li className="h-[180px] w-[300px] border border-black">
          <span className="block h-1/2 w-full bg-blue-600" />
          <span className="block h-1/2 w-full bg-yellow-400" />
        </li>

        <li className="flex h-[200px] w-[300px] items-center justify-center border border-black bg-white">
          <span className="block h-[90px] w-[90px] rounded-full bg-red-600" />
        </li>

        <li className="relative h-[180px] w-[300px] border border-black bg-blue-700">
          <span className="absolute left-[80px] h-full w-[40px] bg-white" />
          <span className="absolute top-[70px] h-[40px] w-full bg-white" />
          <span className="absolute left-[90px] h-full w-[20px] bg-red-600" />
          <span className="absolute top-[80px] h-[20px] w-full bg-red-600" />
        </li>

        <li className="relative h-[180px] w-[300px] border border-black">
          <span className="absolute h-1/2 w-full bg-white" />
          <span className="absolute bottom-0 h-1/2 w-full bg-red-600" />
          <span className="absolute border-t-[90px] border-b-[90px] border-l-[100px] border-t-transparent border-b-transparent border-l-blue-900" />
        </li>
      </ul>
    </section>
  );
}
