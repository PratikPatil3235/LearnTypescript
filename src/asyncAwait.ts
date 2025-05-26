interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


async function fetchData():Promise<void>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result:Post[] = await data.json();
    result.forEach((el: any) => {
        console.log(el.title);
    })
}
fetchData();