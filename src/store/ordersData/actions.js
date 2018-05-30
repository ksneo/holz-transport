import {makeActionCreator} from 'helpers/makeActionCreator';

const TOGGLE_FULL_ORDER = 'TOGGLE_FULL_ORDER';

export const types = {
    TOGGLE_FULL_ORDER,
}

export const showFullOrder = makeActionCreator(TOGGLE_FULL_ORDER, 'id');