export default async function AboutPage(){

    await new Promise((resolve)=>setTimeout(resolve,4000));
    
    // throw new Error("Something went wrong");

    return(
        <div>
            <h1>This is a about page component</h1>
        </div>
    );
}