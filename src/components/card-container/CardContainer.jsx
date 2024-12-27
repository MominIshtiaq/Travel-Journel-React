import Card from "../card/Card"
import styles from "./CardContainer.module.css"

const CardContainer = ({data}) => {
  return (
    
    <div className={styles.card}>
        {data.map(item => (
          <>
            <Card key={item.id} data={item} />
          </>
        ))}
    </div>
  )
}

export default CardContainer
