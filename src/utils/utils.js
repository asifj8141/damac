const cuurencyFormatter = (number)=>{
    const strNumber = new Intl.NumberFormat().format(number);
    return `AED ${strNumber}`;
}


  
function applyFilters(item, filters) {
    return filters.some(filterGroup => {
      return filterGroup.every(filter => {
        const value = item[filter.key];
  
        switch (filter.operator) {
          case '>':
            return value > filter.value;
          case '>=':
            return value >= filter.value;
          case '<':
            return value < filter.value;
          case '<=':
            return value <= filter.value;
          case '=':
          case '==':
            return value == filter.value;
          case '===':
            return value === filter.value;
          default:
            return false;
        }
      });
    });
  }
  
  function applySort(data, sortKey, sortOrder) {
    return data.slice().sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
  
      if (aValue < bValue) return sortOrder === 'ASC' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'ASC' ? 1 : -1;
      return 0;
    });
  }
  
  function queryData(data, filters = [], sortKey, sortOrder) {
  
    let processedData = data;
    console.log(filters);
    if(filters && filters.length){
        processedData = data.filter(item => applyFilters(item, filters));
    }
    if(sortKey){
         processedData = applySort(processedData, sortKey, sortOrder);
    }
    return processedData;
  }
  

//   const filters = [
//     [
//       { key: 'age', value: 30, operator: '>=' }, //OR
//       { key: 'salary', value: 50000, operator: '>' },
//     ], //AND
//     [
//       { key: 'age', value: 25, operator: '<=' },
//       { key: 'salary', value: 60000, operator: '>' },
//     ],
//   ];
  
//   const sortKey = 'age';
//   const sortOrder = 'asc';
  

export {cuurencyFormatter, queryData};