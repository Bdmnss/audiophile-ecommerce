import { useTranslation } from 'react-i18next'

export default function SloganText() {
  const { t } = useTranslation()

  return (
    <div className="lg:flex lg:flex-row-reverse lg:gap-[12.5rem]">
      <div className="mb-[4rem] h-[30rem] w-[100%] rounded-lg bg-best-gear-mobile bg-cover bg-no-repeat md:bg-best-gear-tablet lg:h-[59rem] lg:w-[50%] lg:bg-best-gear-desktop"></div>

      <div className="flex flex-col items-center justify-center text-center md:px-10 lg:w-[50%] lg:text-left">
        <h2 className="mb-[3.2rem] text-[2.8rem] font-bold text-black dark:text-white md:text-[4rem] md:leading-[4.4rem]">
          {t('bringing_you_the')} <span className="text-[#d87d4a]">{t('best')}</span> {t('audio_gear')}
        </h2>

        <p className="text-[1.5rem] font-medium leading-[2.5rem] text-[gray] dark:text-gray-400">
          {t('slogan_text')}
        </p>
      </div>
    </div>
  )
}