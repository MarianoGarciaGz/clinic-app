import React from 'react'
import ImgElegir from './ImgElegir'
import VerticalLineElegir from './VerticalLineElegir'
import ContentElegir from './ContentElegir'
import HorizontalLineElegir from './HorizontalLineElegir'
import ContentSeleccionar from './ContentSeleccionar'
import tratamiento from '../Images/tratamiento.png'
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import usuario from '../Images/usuario.png'
import telefono from '../Images/telefono.png'
import comentarios from '../Images/comentarios.png'

function ElegirTratamiento() {
	return (
		<div className="app-container-elegir">
			<div className="container-elegir">
				<ImgElegir imageUrl={tratamiento}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentSeleccionar concepto="Tratamiento"></ContentSeleccionar>
				<VerticalLineElegir></VerticalLineElegir>
			</div>
			<HorizontalLineElegir></HorizontalLineElegir>
			<div className="container-elegir">
				<ImgElegir imageUrl={fecha}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentSeleccionar concepto="Fecha"></ContentSeleccionar>
				<ImgElegir imageUrl={hora}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentSeleccionar concepto="Hora"></ContentSeleccionar>
			</div>
			<HorizontalLineElegir></HorizontalLineElegir>
			<div className="container-elegir">
				<ImgElegir imageUrl={usuario}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentElegir concepto="Nombre"></ContentElegir>
				<ImgElegir imageUrl={usuario}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentElegir concepto="Apellido"></ContentElegir>
				<ImgElegir imageUrl={telefono}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentElegir concepto="Teléfono"></ContentElegir>
			</div>
			<HorizontalLineElegir></HorizontalLineElegir>
			<div className="container-elegir">
				<ImgElegir imageUrl={comentarios}></ImgElegir>
				<VerticalLineElegir></VerticalLineElegir>
				<ContentElegir concepto="Comentarios"></ContentElegir>
			</div>
		</div>
	)
}

export default ElegirTratamiento
