import Container from './Container'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Heading from './Heading'
import Paragraph from './Paragraph'

import styles from './calltoaction.module.scss'

const CallToAction = ({title}) => {
    return <section className={styles.calltoaction}>
        <Container>
            <div className={styles.calltoaction_flexbox}>
            <Heading level={2}>Get Behind the Wheel</Heading>
            <Paragraph color="white">
                {`Start customizing your ${title} today, or contact your local Subaru dealer to experience one in person.`}
            </Paragraph>
            <ButtonGroup>
                <Button label="Build & Price" type="primary"/>
                <Button label="Contact Dealer" type="secondary"/>
            </ButtonGroup>
            </div>
        </Container>
    </section>
}
export default CallToAction