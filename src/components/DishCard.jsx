const DishCard = ({project}) => {
  return (
    <div>
=    <img src={project.image} alt="project" className="rounded-3xl p-2"/>
    <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-red-400">
            {project.title}
        </h3>
        <p className="text-sm text-white">{project.description}</p>
    </div>
    </div>
)
}

export default DishCard