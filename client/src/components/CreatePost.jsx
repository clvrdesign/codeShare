
const CreatePage = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold mt-10">Add post</h1>
      <form className="flex flex-col items-center justify-center gap-2 my-10" method="post">
        <input className="w-full h-10 px-2 outline-none border border-slate-300 rounded-md bg-slate-100" placeholder="Title" type="text" />
        <input className="w-full h-10 px-2 outline-none border border-slate-300 rounded-md bg-slate-100" placeholder="Image url" type="text" />
        <select className="w-full h-10 px-2 outline-none border border-slate-300 rounded-md bg-slate-100" name="" id="">
          <option selected disabled>Select category</option>
        </select>
        <textarea name="" id="" className="w-full min-h-[150px] px-2 outline-none border border-slate-300 rounded-md bg-slate-100">

        </textarea>
        <button type="submit" className="w-full h-10 px-2 outline-none rounded-md font-semibold bg-[#f8f296]">Add post</button>
      </form>
    </div>
  )
}

export default CreatePage