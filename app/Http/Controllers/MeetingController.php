<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Meeting::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $assetsNames = [];
        if ($request->hasFile('assets'))
            foreach ($request->file('assets') as $imagefile) {
                $filenameWithExt = $imagefile->getClientOriginalName();
                //Get just filename
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                // Get just ext
                $extension = $imagefile->getClientOriginalExtension();
                // Filename to store
                $fileNameToStore = $filename . '_' . time() . '.' . $extension;

                $imagefile->storeAs('public/images', $fileNameToStore);

                $assetsNames[] = $fileNameToStore;
            }
        Meeting::create([
            'name' => $request->input('name'),
            'link' => $request->input('link'),
            'date' => $request->input('date'),
            'state' => $request->input('state'),
            'assets' => json_encode($assetsNames),
        ]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function show(Meeting $meeting)
    {
        return $meeting;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Meeting $meeting)
    {
        $assetsNames = [];
        if ($request->hasFile('assets')) {
            $oldAssets = json_decode($meeting->assets);
            // delete old asstes
            foreach ($oldAssets as $asset) {
                Storage::delete('/public/images/' . $asset);
            }
            // add new assets
            foreach ($request->file('assets') as $imagefile) {
                $filenameWithExt = $imagefile->getClientOriginalName();
                //Get just filename
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                // Get just ext
                $extension = $imagefile->getClientOriginalExtension();
                // Filename to store
                $fileNameToStore = $filename . '_' . time() . '.' . $extension;

                $imagefile->storeAs('public/images', $fileNameToStore);

                $assetsNames[] = $fileNameToStore;

                $meeting->assets = json_encode($assetsNames);
            }
        }
        $meeting->name = $request->input('name');
        $meeting->link = $request->input('link');
        $meeting->date = $request->input('date');
        $meeting->state = $request->input('state');
        $meeting->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Meeting $meeting)
    {
        Meeting::destroy([$meeting->id]);
        return redirect()->back();
    }
}
