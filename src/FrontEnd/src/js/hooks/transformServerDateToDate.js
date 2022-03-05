import moment from 'moment';

export function transformServerDateToDate(serverStringDate ) {
    return moment().add(15,'minutes').fromNow();
}

export default function useTransformServerDateToDate(serverStringDate ) {
    return transformServerDateToDate(serverStringDate);
}