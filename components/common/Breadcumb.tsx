
const Breadcumb = ({title}) => {
  return (
    <div className="bg-gray-100 py-3 px-6 text-sm">
      <div className="max-w-7xl mx-auto">
        <span className="text-gray-500"> Home </span> /
        <span className="font-semibold text-[var(--color-primary)]"> {title} </span>
      </div>
    </div>
  )
}

export default Breadcumb;