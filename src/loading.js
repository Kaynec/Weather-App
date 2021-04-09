export {load}

let load=(()=>{
    const loaderDiv = document.querySelector('.loader')
    const grids = document.querySelectorAll('#grid')

    const  loading= ()=>{
        grids.forEach(grid=>{
            grid.style.display='none'
        })
        loaderDiv.style.display='block'
    }
    
    const loaded = () =>{
        grids.forEach(grid=>{
            grid.style.display='block'
        })
        loaderDiv.style.display='none'
    }
    return {
        loading:loading,
        loaded:loaded
    }
  })();
