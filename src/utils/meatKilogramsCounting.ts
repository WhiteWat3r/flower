export const meatKilogramsCounting = (hungredStatus: number, duration: number, meat: string, peopleCount: number) => {
  let baseAmount: number;


  const isVegetable = meat === 'chicken' || meat === 'vegetable';
  if (isVegetable) {
    baseAmount = peopleCount * 0.4;
  } else {
    baseAmount = peopleCount * 0.3;
  }

  let coefficient: number;
  if (duration === 1) {
    if (hungredStatus === 1) {
      coefficient = 1;
    } else if (hungredStatus === 2) {
      coefficient = isVegetable ? 1.25 : 1.34;
    } else {
      coefficient = isVegetable ? 1.5 : 1.67;
    }
  } else if (duration === 2) {
    if (hungredStatus === 1) {
      coefficient = isVegetable ? 1.25 : 1.34;
    } else if (hungredStatus === 2) {
      coefficient = isVegetable ? 1.5 : 1.67;
    } else {
      coefficient = isVegetable ? 1.75 : 2;
    }
  } else {
    if (hungredStatus === 1) {
      coefficient = isVegetable ? 1.5 : 1.67;
    } else if (hungredStatus === 2) {
      coefficient = isVegetable ? 1.75 : 2;
    } else {
      coefficient = isVegetable ? 2 : 2.34;
    }
  }

  // Умножаем базовое количество на коэффициент
  return (baseAmount * coefficient).toFixed(1);
};
