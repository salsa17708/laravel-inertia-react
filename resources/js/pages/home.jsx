import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import { useState } from "react";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashMsg, setFlashMsg] = 
    useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null)
    },2000);
 
    return (
        <>
        <Head title={component}/>
           
            <h1 className="title">hello</h1>
            {flashMsg && ( 
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
                )}

            <div className="posts-container">
                {posts.data.map((post) => (
                    <div key={post.id} className="post p-4 border-b">
                        <div className="post-metadata text-sm text-slate-600">
                            <span>Posted on:</span>
                            <span>
                                {new Date(post.created_at).toLocaleString()}
                            </span>
                        </div>
                        <p className="post-body font-medium">{post.body}</p>

                        <Link href={`/posts/${post.id}`} className="text-link read-more" >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>

             <div className=" py-12 px-4">
                {posts.links.map((link) => (
                    link.url ?
                        <Link 
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`pagination-link p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                        />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="pagination-link p-1 mx-1 text-slate-300"
                        ></span>
                ))}
            </div>  
        </>
    );
    );

