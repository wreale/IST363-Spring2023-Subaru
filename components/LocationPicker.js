import Container from './Container';
import styles from './locationpicker.module.scss';
import Heading from './Heading';
import Paragraph from './Paragraph';

const LocationPicker = () => {
    return <section className={styles.locationPicker}>
        <Container>
            <Heading level={2}>
                Location Picker
            </Heading>
            <Paragraph>
                This is a description of the car.
            </Paragraph>
        </Container>
    </section>
}

export default LocationPicker;