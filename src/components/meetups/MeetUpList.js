import classes from './MeetUpList.module.scss';
import MeetUpItem from './MeetUpItem';
import Card from '../ui/Card';

function MeetUpList(props) {
    return (
        <div>
            <Card>
                <ul className={classes.list}>
                    {props.meetups.map((meetup) => (
                    <MeetUpItem
                    key={meetup.id} 
                    id={meetup.id} 
                    image={meetup.image} 
                    title={meetup.title} 
                    address={meetup.address}
                    description={meetup.description}
                    />))}
                </ul>
            </Card>
        </div>
        
    );
}

export default MeetUpList;