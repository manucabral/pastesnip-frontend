import { useParams } from 'react-router-dom'

export default function ProfileById() {
    const { id } = useParams()
    return <h2 className="text-white text-xl">{id}</h2>
}
