<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Book::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $videos_names = $request->input('video_name.*');
        $videos_links = $request->input('video_link.*');
        $videos = [];
        if (!empty($videos_names))
            foreach ($videos_names as $key => $name) {
                $videos[] = [$name, $videos_links[$key]];
            }
        if ($request->hasFile('cover_photo')) {
            // Get filename with the extension
            $filenameWithExt = $request->file('cover_photo')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('cover_photo')->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename . '_' . time() . '.' . $extension;

            $request->file('cover_photo')->storeAs('public/images', $fileNameToStore);
            Book::create([
                'name' => $request->input('book_name'),
                'cover' => $fileNameToStore,
                'pdf' => $request->input('pdf_link'),
                'videos' => json_encode($videos),
            ]);
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $videos_names = $request->input('video_name.*');
        $videos_links = $request->input('video_link.*');
        $videos = [];
        if (!empty($videos_names))
            foreach ($videos_names as $key => $name) {
                $videos[] = [$name, $videos_links[$key]];
            }
        if ($request->hasFile('cover_photo')) {
            // Get filename with the extension
            $filenameWithExt = $request->file('cover_photo')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('cover_photo')->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename . '_' . time() . '.' . $extension;

            $request->file('cover_photo')->storeAs('public/images', $fileNameToStore);

            $book->cover = $fileNameToStore;
        }
        $book->name = $request->input('book_name');
        $book->pdf = $request->input('pdf_link');
        $book->videos = json_encode($videos);
        $book->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        Book::destroy([$book->id]);
        return redirect()->back();
    }
}
