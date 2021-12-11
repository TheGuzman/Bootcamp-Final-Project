import { useParams } from 'react-router';


export default function JoinFishbowlPage(){

    const { roomId } = useParams()


    return(
        <p>join fishbowl page</p>
    )
}