const areaTriangulo = (base, altura) => {
  const area = (base * altura) / 2;
  return Number(area.toFixed(2));
};

console.log(areaTriangulo(10, 6));
