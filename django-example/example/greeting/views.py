from django.shortcuts import render
from django.http import JsonResponse


def index(request, name):
	content = {
		"greeting": f'Hola {name}'
	}
	return JsonResponse(content)
