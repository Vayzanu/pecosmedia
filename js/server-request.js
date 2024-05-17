//Load mock data from json file and return it to be used in other functions
function loadData(){
    return new Promise((resolve, reject) => {
        try {
            fetch('./js/data.json').then(async (response) => {
                const data = await response.json();
                resolve(data);
            });
        } catch(error){
            reject(error);
        }
        
    })
    
}