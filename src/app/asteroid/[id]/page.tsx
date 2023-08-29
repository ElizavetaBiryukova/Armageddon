
interface AsteroidProps {
    params: {
        id: string
    }
}




const Asteroid = ({ params }: AsteroidProps): JSX.Element => {


    return (
        <div>

            <h1>id: {params.id}</h1>

        </div>
    )
};

export default Asteroid;