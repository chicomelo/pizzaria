import styles from './styles.module.scss'
import { RefreshCw } from 'lucide-react' 


export function Orders(){
    return(
        <main className={styles.container}>
        
            <section className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button>
                    <RefreshCw
                        size={24}
                        color='#3fffa3'
                    />
                </button>
            </section>

            <section className={styles.listOrders}>

                <button
                    className={styles.orderItem}
                >
                    Mesa 10
                </button>
                <button
                    className={styles.orderItem}
                >
                    Mesa 10
                </button>
            </section>

        </main>
    )
}