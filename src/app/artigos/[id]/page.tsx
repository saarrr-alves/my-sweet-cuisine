import { notFound } from 'next/navigation';
import style from './DetalheReceita.module.css';
import Link from 'next/link';
import { receitas } from '../../data/artigos.json';

type Props = {
    params: Promise <{ 
        id: number 
    }>;
}

export const generateMetadata = async ({ params }: Props) => { 
    const { id } = await params;

    const details =  receitas.find((receita) => receita.id == id);

    if (!details)
        return;

    return {
        title: `${details.title} | Receitas Incríveis`,
        description: details.description,
        openGraph: {
            title: `${details.title} | Receitas Incríveis`,
            description: details.description,
            images: [
                {
                    url: details.image,
                    width: 800,
                    height: 600,
                    alt: details.title,
                },
            ],
            locale: 'pt-BR',
            type: 'article',
        },
    };
}

const DetalheReceita = async ({params} : Props) => {
    const { id } = await params;

    const details =  receitas.find((receita) => receita.id == id);

    if (!details)
        return notFound();

    const { title, image, description, author, date } = details;
    
    return (
        <main className={style.container}>
            <Link href="/" className={style.btnBack}>
                ← <span>Voltar</span>
            </Link>

            <article className={style.article}>
                <header className={style.header}>
                    <h1 className={style.title}>{title}</h1>
                    <div className={style.meta}>
                        <span>Por <strong>{author}</strong></span>
                        <span className={style.separator}>•</span>
                        <time>{new Date(date).toLocaleDateString('pt-BR')}</time>
                    </div>
                </header>

                <div className={style.imageWrapper}>
                    <img className={style.image} src={image} alt={title} />
                </div>

                <p className={style.description}>{description}</p>

                <div className={style.gridContent}>
                    <section className={style.ingredientsSection}>
                        <h2>Ingredientes</h2>
                        <ul className={style.listIngredients}>
                            {details.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={style.prepSection}>
                        <h2>Modo de Preparo</h2>
                        <ol className={style.listPrep}>
                            {details.preperation.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </section>
                </div>
            </article>
        </main>
    );
}

export default DetalheReceita;