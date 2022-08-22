import { useEffect, useState } from "react";
import { api } from "../api/axios";
import Book from "../components/Book";
import { Book as BookModel } from "../models/Book";

export default function ControlMaterial() {
    const [books, setBooks] = useState<BookModel[]>([])
    useEffect(() => {
        const getBooks = async () => {
            const promiseBooks = await api.get<{ id: number, name: string, cover: string, pdf: string, videos: string }[]>('book/index')
            if (promiseBooks.status !== 200) {
                throw Error('error fetching books');
            }
            const bookModels = promiseBooks.data.map(book => new BookModel(book.id, book.name, book.cover, book.pdf, book.videos));
            setBooks(bookModels);
        }
        getBooks();
    }, [])
    return (
        <div className="container my-16 flex flex-col gap-4">
            {
                books.map(book=><Book key={book.id} book={book} />)
            }
            <Book />
        </div>
    )
}
