/** @format */

export const setViewValue = (value: string | number | Date | undefined) => {
  if (value !== undefined) {
    switch (typeof value) {
      case 'number':
        return value.toLocaleString('ru-RU');
      case 'object':
        return (value as Date).toLocaleDateString('ru-RU');
      default:
        return value;
    }
  } else return 'данные отсутствуют';
};
