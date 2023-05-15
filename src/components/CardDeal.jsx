import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Encuentre una mejor oferta de tarjeta <br className="sm:block hidden" /> en unos sencillos pasos.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ¡Olvídate de la tarjeta débito tradicional! recíbela a domicilio con datos como: código CVV y fecha de vencimiento, que te permiten comprar en línea debitando la plata de tu Cuenta de Ahorros.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    </section>
)

export default CardDeal