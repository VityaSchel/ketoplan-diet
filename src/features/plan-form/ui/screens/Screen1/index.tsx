import styles from './styles.module.scss'
import PlanFormScreen from '../index'
import * as Yup from 'yup'
import GenderButton from './GenderButton'
import Male from '@/assets/plan-form-screens/Male.png'
import Female from '@/assets/plan-form-screens/Female.png'
import { useFormikContext } from 'formik'
import MobileScreenTheme from '@/shared/ui/screen-theme'

export const ValidationSchema = {
  gender: Yup.string()
    .oneOf(['MALE', 'FEMALE'])
    .required()
}

export default function Screen1(props: { onContinue: () => any }) {
  const formik = useFormikContext()

  return (
    <PlanFormScreen
      title={<span style={{ fontSize: '1.45em' }}>Получите свой план кетодиеты</span>}
      subtitle='Ответьте на 8 простых вопросов, и мы рассчитаем ваш индивидуальный план питания'
      screen={1}
    >
      <MobileScreenTheme theme={'light'} />
      <div className={styles.genderSelect}>
        <GenderButton
          image={{ src: Female, alt: 'Женщина' }}
          label='План для женщины'
          onClick={() => {
            formik.setFieldValue('gender', 'FEMALE')
            eval(process.env.NEXT_PUBLIC_YANDEX_METRICA_GOAL_MALE ?? '')
            props.onContinue()
          }}
        />
        <GenderButton
          image={{ src: Male, alt: 'Мужчина' }}
          label='План для мужчины'
          onClick={() => {
            formik.setFieldValue('gender', 'MALE')
            eval(process.env.NEXT_PUBLIC_YANDEX_METRICA_GOAL_FEMALE ?? '')
            props.onContinue()
          }}
        />
      </div>
      <script type="text/javascript">{`!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("${process.env.NEXT_PUBLIC_VK_METRICA_HOMEPAGE}"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`}</script><noscript dangerouslySetInnerHTML={{ __html: `<img src="https://vk.com/rtrg?p=${process.env.NEXT_PUBLIC_VK_METRICA_HOMEPAGE}" style="position:fixed; left:-999px;" alt=""/>` }}></noscript>
    </PlanFormScreen>
  )
}