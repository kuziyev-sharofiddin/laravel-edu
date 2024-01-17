<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Service\ContactService;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __construct(protected ContactService $service)
    {

    }
    public function index()
    {
        $contacts = $this->service->getByPaginate(10);
        return view('contact.show_news')->with(['contacts' => $contacts]);
    }
    public function store(ContactRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('main.home');
    }
    public function destroy($contact)
    {
        $this->service->destroy($contact);
        return redirect()->route('contacts.index');
    }
}
