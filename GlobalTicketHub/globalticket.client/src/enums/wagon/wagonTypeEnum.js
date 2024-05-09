import { useTranslation } from "react-i18next"

export const WagonType = () =>{
    const {t} = useTranslation()
    return {
    "0":t('wagonType.seatFirst'),
    "1":t('wagonType.seatSecond'),
    "2":t('wagonType.plac'),}
}