(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  // Silhouette studio
  var SH={pencil:['Pencil','Narrow and straight, following the hips to the knee. Sleek and polished.',70,300,0,'Office, evenings out','None; a slip prevents clinging'],
    aline:['A-line','Fitted at the waist and flaring gently, like a capital A. Flattering on almost everyone.',150,300,0,'Everyday, work, travel','Optional light slip'],
    circle:['Circle skirt','Cut as a full circle of fabric so it swings and twirls as you move.',210,290,0,'Parties, dancing, summer','A soft petticoat adds lift'],
    tea:['Full tea-length','A 1950s favourite: a full skirt ending mid-calf, puffed out with layers underneath.',240,320,1,'Vintage events, weddings, swing dancing','One or two net petticoats'],
    gown:['Ball gown','A fitted bodice over a dramatic, floor-length skirt with maximum volume.',300,360,2,'Formal balls, bridal, gala evenings','Hoop skirt or several stiff layers']};
  var sk='aline',vol=30;
  function sil(){var s=document.getElementById('sil');if(!s)return;var d=SH[sk],w=d[2]+(d[4]?vol*0.9:vol*0.25),bot=d[3],wx=200,top=150,hw=Math.min(w,340)/2;
    var path='M'+(wx-34)+' '+top+' C '+(wx-40)+' '+(top+40)+', '+(wx-hw)+' '+(bot-80)+', '+(wx-hw)+' '+bot+' Q '+wx+' '+(bot+18)+' '+(wx+hw)+' '+bot+' C '+(wx+hw)+' '+(bot-80)+', '+(wx+40)+' '+(top+40)+', '+(wx+34)+' '+top+' Z';
    var hoops='';if(d[4]){for(var i=1;i<=3;i++){var y=top+(bot-top)*i/3.4,hx=34+(hw-34)*Math.pow(i/3.4,0.8);hoops+='<ellipse cx="200" cy="'+y.toFixed(0)+'" rx="'+hx.toFixed(0)+'" ry="'+(6+i*3)+'" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="4 4" opacity=".75"/>';}}
    s.innerHTML='<circle cx="200" cy="52" r="22" fill="#14213D"/><path d="M182 76 Q200 70 218 76 L224 150 L176 150 Z" fill="#14213D"/><path d="'+path+'" fill="#2F6FD6"/>'+hoops+'<path d="M176 150 L224 150" stroke="#C9A44C" stroke-width="4"/><line x1="'+(bot>310?196:190)+'" y1="'+bot+'" x2="'+(bot>310?196:190)+'" y2="'+Math.min(bot+40,390)+'" stroke="#14213D" stroke-width="5"/><line x1="'+(bot>310?204:210)+'" y1="'+bot+'" x2="'+(bot>310?204:210)+'" y2="'+Math.min(bot+40,390)+'" stroke="#14213D" stroke-width="5"/>';
    document.getElementById('s-n').textContent=d[0];document.getElementById('s-d').textContent=d[1];
    document.getElementById('s-l').innerHTML='<dt>Volume</dt><dd>'+(vol<34?'Soft':vol<67?'Medium':'Full')+' ('+vol+'%)</dd><dt>Underneath</dt><dd>'+d[6]+'</dd><dt>Best for</dt><dd>'+d[5]+'</dd>';
    document.querySelectorAll('[data-sk]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.sk===sk?'true':'false');});}
  document.querySelectorAll('[data-sk]').forEach(function(x){x.addEventListener('click',function(){sk=x.dataset.sk;sil();});});
  var vr=document.getElementById('vol');if(vr)vr.addEventListener('input',function(){vol=+vr.value;sil();});
  sil();
  // Skirt length finder
  var hi=document.getElementById('ht'),he=document.getElementById('heel');
  var LN=[['Mini',.40],['Knee',.60],['Midi',.76],['Tea',.86],['Maxi',1]];
  function len(){if(!hi)return;var H=Math.min(210,Math.max(130,parseFloat(hi.value)||165)),heel=Math.min(15,Math.max(0,parseFloat(he.value)||0)),floor=H*0.6;
    document.getElementById('ln').innerHTML=LN.map(function(l){var v=Math.round(l[0]==='Maxi'?floor+heel-1:floor*l[1]);return '<li><em style="font-style:normal">'+l[0]+'</em><span><i style="width:'+(v/(floor+15)*100)+'%"></i></span><b>'+v+' cm</b></li>';}).join('');
    document.getElementById('lf').textContent='Estimated waist-to-floor: about '+Math.round(floor)+' cm for a height of '+H+' cm.';}
  if(hi){hi.addEventListener('input',len);he.addEventListener('input',len);len();}
  // Azure palette
  var PA={sky:[['#9CC8F0','Sky blue'],['#F6E7D8','Oat'],['#C98B8B','Dusty rose'],['#FFFFFF','Crisp white']],cobalt:[['#2F6FD6','Cobalt'],['#F2C14E','Marigold'],['#FFFFFF','White'],['#8A8F99','Dove grey']],
    navy:[['#14213D','Navy'],['#E9DCC7','Ivory'],['#C9A44C','Antique gold'],['#7A1F2B','Claret']],teal:[['#2A8C98','Azure teal'],['#F3EDE2','Shell'],['#E58E73','Coral'],['#3A3F4A','Charcoal']]};
  var TP={sky:'Soft and summery. Pair with warm neutrals and a touch of rose.',cobalt:'Bold and joyful. A sunny yellow accessory makes it sing.',navy:'Timeless and elegant. Gold jewellery and ivory keep it warm.',teal:'Fresh and coastal. Coral adds a confident contrast.'};
  var pk='cobalt';
  function pal(){var o=document.getElementById('pa');if(!o)return;o.innerHTML=PA[pk].map(function(c){return '<div><i style="background:'+c[0]+'"></i><small><b>'+c[1]+'</b><br>'+c[0]+'</small></div>';}).join('');document.getElementById('pt').textContent=TP[pk];
    document.querySelectorAll('[data-pk]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.pk===pk?'true':'false');});}
  document.querySelectorAll('[data-pk]').forEach(function(x){x.addEventListener('click',function(){pk=x.dataset.pk;pal();});});
  pal();
  // Contact form -> email app
  var cf=document.getElementById('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=document.getElementById('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=document.getElementById('cookie'),v=null;try{v=localStorage.getItem('ca_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('ca_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
