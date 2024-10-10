const alldataload = async (categories) => {

    if (categories) {
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categories}`)
        const data = await res.json()
        const display = data.posts
        const info = document.getElementById("info")
        info.innerHTML = "";
        display.forEach(post => {
            console.log(post)
            const div = document.createElement('div')
            div.innerHTML = `
           <div class="bg-base-200 w-full p-10 mt-10 rounded-2xl lg:flex gap-10 items-center">
                        <div>
                            <img class="rounded-xl w-32" src="${post.image}" alt="picture" srcset="">
                        </div>
                        <div class="mt-5">
                            <div>
                                <div class="flex gap-5">
                                    <h1># ${post.category}</h1>
                                    <p>Author: ${post.author.name}</p>
                                </div>
                            </div>
                            <div class="mt-3">
                                <h1>10 Kids Unaware of Their Halloween Costume</h1>
                                <p class="mt-3">${post.description}</p>
    
                            </div>
                            <div class="divider"></div>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-4">
                                    <p><i class="fa-regular fa-message text-xl"></i>${post.comment_count}</p>
                                    <p><i class="fa-regular fa-eye text-xl"></i> ${post.view_count}</p>
                                    <p><i class="fa-regular fa-clock text-xl"></i>${post.posted_time} min</p>
                                </div>
                                <div>
                                    <button class="btn bg-green-500 rounded-full"><i
                                            class="fa-solid fa-message text-white"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `

            info.append(div)

        });

    }
    else {
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
        const data = await res.json()
        const display = data.posts
        display.forEach(post => {
            console.log(post)

            const info = document.getElementById("info")
            const div = document.createElement('div')
            div.innerHTML = `
           <div class="bg-base-200 w-full p-10 mt-10 rounded-2xl lg:flex gap-10 items-center">
                        <div>
                            <img class="rounded-xl w-32" src="${post.image}" alt="picture" srcset="">
                        </div>
                        <div class="mt-5">
                            <div>
                                <div class="flex gap-5">
                                    <h1># ${post.category}</h1>
                                    <p>Author: ${post.author.name}</p>
                                </div>
                            </div>
                            <div class="mt-3">
                                <h1>10 Kids Unaware of Their Halloween Costume</h1>
                                <p class="mt-3">${post.description}</p>
    
                            </div>
                            <div class="divider"></div>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-4">
                                    <p><i class="fa-regular fa-message text-xl"></i>${post.comment_count}</p>
                                    <p><i class="fa-regular fa-eye text-xl"></i> ${post.view_count}</p>
                                    <p><i class="fa-regular fa-clock text-xl"></i>${post.posted_time} min</p>
                                </div>
                                <div>
                                    <button class="btn bg-green-500 rounded-full"><i
                                            class="fa-solid fa-message text-white"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `

            info.append(div)

        });

    }
}

alldataload()

const buttonhandale = async () => {
    const searchitem = document.getElementById("search").value;

    alldataload(searchitem)

}

