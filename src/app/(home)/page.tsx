import SectionsHeader from '@/Components/Sections-header';
import Description from '@/Components/Description';
import Post from '@/Components/Post';
import Link from 'next/link';

import styles from './home.module.css';



export default function Home() {
  return (
    <div className={` ${styles.home} `}>
      <div className={` ${styles.home_container} base_width `}>
        <div className={`${styles.post_list} post_list`}>
            <SectionsHeader sectionHeader={{
              name: 'Блоги по программированию'
            }}/>
            <Description description={{
              text: 'Популярные и лучшие публикации по программированию для начинающихи профессиональных программистов и IT-специалистов.'
            }}/>
            <Post 
              post={{
                img: { src: "/images/post/post001.png", alt: "Post img" },
                sectionHeader: { name: "Обзор Report Manager от Webix" },
                description: {
                text: "Осень 2020 года стала плодотворным временем для специалистов Webix. Команда Webix выпустила восьмую версию библиотеки пользовательского интерфейса Webix с двумя новыми комплексными виджетами. Первый - зто Scheduler, о котором мы подробно говорили ранее. Второй виджет - это Gantt chart в JavaScript. Подробную информацию об этом виджете Вы можете найти в статье. Ноябрь продолжает тенденцию, и мы спешим поделиться с Вами новым комплексным виджетом Report Manager. Давайте рассмотрим ег"
                }
              }}
            />
        </div>
        <div className={`${styles.side_bar} side_bar`}>
            <SectionsHeader sectionHeader={{
              name: 'Категории'
            }}/>
            <div className={`${styles.category_list}`}>
              <Link href="">Прогнозы в IT</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
