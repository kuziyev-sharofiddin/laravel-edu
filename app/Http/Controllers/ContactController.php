<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact.show_news')->with([
            'contacts' => Contact::all(),
        ]);
    }

    public function store(Request $request)
    {
        $contact  = Contact::create([
            // 'user_id'=>aut h()->user()->id,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'comment' => $request->comment,
        ]);

        return redirect()->route('main.home');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contacts.index');
    }
}
